import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/src/common/launch.dart';
import 'package:genlu_delivery_v1/src/models/petition_model.dart';
import 'package:genlu_delivery_v1/src/widgets/circular_button.dart';

class FloatingButtonCall extends StatelessWidget {
  const FloatingButtonCall({
    Key? key,
    required this.petition,
  }) : super(key: key);

  final PetitionModel petition;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 200,
      right: kDefaultPadding,
      child: CircularButton(
        icon: const Icon(Icons.call_outlined, color: kPrimaryColor, size: 40),
        onPressed: () {
          call(petition.store.contact);
        },
      ),
    );
  }
}
