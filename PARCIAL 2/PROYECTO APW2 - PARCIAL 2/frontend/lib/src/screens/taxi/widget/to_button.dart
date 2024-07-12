import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/models/product_model.dart';
import 'package:genlu_delivery_v1/src/provider/db_provider.dart';
import 'package:genlu_delivery_v1/src/provider/preferences_provider.dart';
import 'package:genlu_delivery_v1/src/screens/cart_summary/cart_summary_screen.dart';
import 'package:genlu_delivery_v1/src/screens/taxi/taxi_controller.dart';
import 'package:genlu_delivery_v1/src/widgets/address_dropdown/address_dropdown_controller.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';
import 'package:provider/provider.dart';

class ToButton extends StatelessWidget {
  const ToButton({
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
          text: S.of(context).bRequestCabt,
          icon: Icons.checklist_sharp,
          color: kErrorColor,
          onPressed: () async {
            final addressDropdownController =
                Provider.of<AddressDropdownController>(context, listen: false);

            FocusScope.of(context).requestFocus(FocusNode());

            final navigator = Navigator.of(context);

            await DBProvider.db.deleteAddress();
            await DBProvider.db.deleteAllProduct(taxiController.company.type);

            ProductModel product = ProductModel(
              id: 1,
              companyId: taxiController.company.id,
              companyName: taxiController.company.name,
              name: taxiController.company.name,
              description: '',
              type: 0,
              price: 0.0,
              image: taxiController.company.image,
            );

            await DBProvider.db.createProduct(
              product,
              taxiController.company.type,
              lt: taxiController.taxi.from.location.x,
              lg: taxiController.taxi.from.location.y,
            );

            await DBProvider.db.createAddress(taxiController.taxi.to);
            await addressDropdownController
                .setDropdownByAddess(taxiController.taxi.to);

            navigator.push(MaterialPageRoute(
                builder: (context) =>
                    const CartSummaryScreen(isSumaryTaxi: true)));
          },
        ),
      ),
    );
  }
}
