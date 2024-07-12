import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/common/map_helper.dart';
import 'package:genlu_delivery_v1/src/provider/preferences_provider.dart';
import 'package:genlu_delivery_v1/src/screens/taxi/taxi_controller.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';

class DestinationPointButton extends StatelessWidget {
  const DestinationPointButton({
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
          icon: Icons.assistant_photo_outlined,
          text: S.of(context).bSetDestinationPoint,
          onPressed: () async {
            if (taxiController.initMove == true) return;
            FocusScope.of(context).requestFocus(FocusNode());

            double travelDistance = MapHelper().calculateDistance(
                taxiController.taxi.from.location.x,
                taxiController.taxi.from.location.y,
                taxiController.address.location.x,
                taxiController.address.location.y);
            if (travelDistance <= kMinimumTravelDistance) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                    backgroundColor: kErrorColor,
                    content: Text(
                      S
                          .of(context)
                          .mMinimumTravelDistance(kMinimumTravelDistance),
                    )),
              );
              return;
            }
            taxiController
                .addMarkertDetinationLocation(taxiController.address.location);
            taxiController.establishedDetinationLocation = true;

            Future.delayed(
              const Duration(milliseconds: 100),
              () => taxiController.centerMap(),
            );
          },
        ),
      ),
    );
  }
}
