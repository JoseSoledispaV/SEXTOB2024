import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/common/map_helper.dart';
import 'package:genlu_delivery_v1/src/provider/preferences_provider.dart';
import 'package:genlu_delivery_v1/src/screens/login/login_screen.dart';
import 'package:genlu_delivery_v1/src/screens/taxi/taxi_controller.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';

class PickUpPointButton extends StatelessWidget {
  const PickUpPointButton({
    Key? key,
    required this.prefs,
    required this.taxiController,
  }) : super(key: key);

  final TaxiController taxiController;
  final PreferencesProvider prefs;

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: PrimaryButton(
          icon: Icons.local_taxi_outlined,
          color: kSecondaryColor,
          text: S.of(context).bSetPickUpPoint,
          onPressed: () async {
            if (taxiController.initMove == true) return;
            FocusScope.of(context).requestFocus(FocusNode());
            if (prefs.isAuth) {
              if (taxiController.taxi.from.location.x == 0 ||
                  taxiController.taxi.from.location.y == 0) {
                return;
              }
              double distanceStoreStartingPoint = MapHelper().calculateDistance(
                  taxiController.taxi.from.location.x,
                  taxiController.taxi.from.location.y,
                  taxiController.company.location.x,
                  taxiController.company.location.y);

              if (distanceStoreStartingPoint >
                  kMaximumDistanceStoreStartingPoint) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    backgroundColor: kErrorColor,
                    content: Text(S
                        .of(context)
                        .mMaximumDistanceStoreStartingPoint(
                            taxiController.company.name)),
                    action: SnackBarAction(
                      label: S.of(context).bReturn,
                      textColor: Colors.white,
                      onPressed: () => Navigator.pop(context),
                    ),
                  ),
                );
                return;
              }

              taxiController
                  .addMarkertPickupLocation(taxiController.address.location);
              taxiController.establishedPickupLocation = true;
            } else {
              Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(builder: (context) => const LoginScreen()),
                  (Route<dynamic> route) {
                return false;
              });
            }
          },
        ),
      ),
    );
  }
}
