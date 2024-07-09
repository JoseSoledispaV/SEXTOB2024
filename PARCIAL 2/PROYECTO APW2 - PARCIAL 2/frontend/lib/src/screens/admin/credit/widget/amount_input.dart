import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/common/validator.dart';
import 'package:genlu_delivery_v1/src/screens/admin/credit/credit_controller.dart';

class AmountInput extends StatelessWidget {
  const AmountInput(
    this.creditController, {
    Key? key,
  }) : super(key: key);

  final CreditController creditController;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: kDefaultPadding * 0.75),
      decoration: BoxDecoration(
        color: kPrimaryColor.withOpacity(0.05),
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextFormField(
        keyboardType: TextInputType.number,
        textCapitalization: TextCapitalization.sentences,
        decoration: InputDecoration(
          icon: const Icon(Icons.price_check_outlined, color: kPrimaryColor),
          hintText: S.of(context).lAmount,
          border: InputBorder.none,
        ),
        onSaved: (amount) {
          amount = amount!.trim();
          amount = amount.replaceFirst(',', '.');
          creditController.amount = double.parse(amount);
        },
        validator: (value) => validatePrice(context, value!),
      ),
    );
  }
}
