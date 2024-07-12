import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/screens/cart_summary/cart_summary_controller.dart';
import 'package:genlu_delivery_v1/src/screens/cart_summary/widget/body_cart.dart';
import 'package:genlu_delivery_v1/src/widgets/modal_progress_hud.dart';
import 'package:provider/provider.dart';

class CartSummaryScreen extends StatelessWidget {
  final bool isSumaryTaxi;

  const CartSummaryScreen({super.key, this.isSumaryTaxi = false});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<CartSummaryController>.value(
      value: CartSummaryController(isSumaryTaxi: isSumaryTaxi),
      child: Scaffold(
        appBar: AppBar(
          title: Text(S.of(context).tCartSummary),
        ),
        body: Consumer<CartSummaryController>(
          builder: (context, cartSummaryController, child) => ModalProgressHUD(
            inAsyncCall: cartSummaryController.inAsyncCall,
            child: const BodyCart(),
          ),
        ),
      ),
    );
  }
}
