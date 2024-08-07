import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/common/launch.dart';
import 'package:genlu_delivery_v1/src/models/petition_model.dart';

class ButtonStoreDirection extends StatelessWidget {
  const ButtonStoreDirection({
    Key? key,
    required this.petition,
  }) : super(key: key);

  final PetitionModel petition;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      style: ElevatedButton.styleFrom(
          backgroundColor: Colors.white,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(0.0))),
      label: Text(
        S.of(context).bRouteStore,
        style: const TextStyle(color: kPrimaryColor),
      ),
      icon: const Icon(
        Icons.travel_explore,
        color: kPrimaryColor,
        size: 30,
      ),
      onPressed: () {
        openMapDirections(petition.start.x, petition.start.y);
      },
    );
  }
}
