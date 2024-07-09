import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/models/company_model.dart';
import 'package:genlu_delivery_v1/src/screens/store/store_controller.dart';
import 'package:genlu_delivery_v1/src/screens/store/widget/group_product.dart';
import 'package:genlu_delivery_v1/src/screens/store/widget/list_product.dart';
import 'package:genlu_delivery_v1/src/widgets/icon_cart/icon_cart.dart';
import 'package:genlu_delivery_v1/src/widgets/label.dart';
import 'package:genlu_delivery_v1/src/widgets/modal_progress_hud.dart';
import 'package:provider/provider.dart';

class StoreScreen extends StatelessWidget {
  final CompanyModel company;

  const StoreScreen(this.company, {super.key});

  @override
  Widget build(BuildContext context) {
    final storeController = Provider.of<StoreController>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text(company.name),
        actions: const [IconCart()],
      ),
      body: ModalProgressHUD(
        inAsyncCall: storeController.inAsyncCall,
        child: Column(
          children: [
            Row(
              children: [
                Label(S.of(context).tStore, (S.of(context).tTStore)),
                Expanded(child: Container()),
                Text(
                    '${S.of(context).lDeliveryFee} ${storeController.deliveryFee.toStringAsFixed(kCoinDecimals)} $kCoin'),
                const SizedBox(width: kDefaultPadding),
              ],
            ),
            if (storeController.groups.isNotEmpty)
              GroupProduct(storeController: storeController),
            Expanded(child: ListProduct(storeController.products))
          ],
        ),
      ),
    );
  }
}
