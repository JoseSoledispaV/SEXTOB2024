import 'package:flutter/material.dart';
import 'package:intl_phone_field/intl_phone_field.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/screens/admin/credit/credit_controller.dart';

class PhoneInput extends StatelessWidget {
  const PhoneInput(
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
      child: IntlPhoneField(
        decoration: InputDecoration(labelText: S.of(context).hPhone),
        initialCountryCode: kCountryCode,
        initialValue: creditController.phone,
        invalidNumberMessage: S.of(context).eValidatoPhone,
        disableLengthCheck: true,
        validator: (value) {
          if (value!.completeNumber.trim().length < 10 ||
              value.completeNumber.trim().length > 19) {
            return S.of(context).eValidatoPhone;
          }
          return null;
        },
        onSaved: (phone) =>
            creditController.phone = phone!.completeNumber.toString(),
      ),
    );
  }
}
