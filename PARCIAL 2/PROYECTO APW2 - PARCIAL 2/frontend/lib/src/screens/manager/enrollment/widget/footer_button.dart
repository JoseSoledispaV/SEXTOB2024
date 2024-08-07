import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/screens/manager/enrollment/widget/enrollment_form.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';

class FooterButton extends StatelessWidget {
  const FooterButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: PrimaryButton(
          text: S.of(context).bEstablishLocation,
          onPressed: () async {
            Navigator.push(context,
                MaterialPageRoute(builder: (context) => EnrollmentForm()));
          },
        ),
      ),
    );
  }
}
