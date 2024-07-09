import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/screens/main/tab1_controller.dart';

class FilterInput extends StatelessWidget {
  const FilterInput({
    Key? key,
    required this.tab1Controller,
  }) : super(key: key);

  final Tab1Controller tab1Controller;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: kDefaultPadding * 0.75),
      margin: const EdgeInsets.symmetric(horizontal: kDefaultPadding * 0.5),
      decoration: BoxDecoration(
        color: kPrimaryColor.withOpacity(0.05),
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextField(
        keyboardType: TextInputType.name,
        textCapitalization: TextCapitalization.words,
        decoration: InputDecoration(
          icon: const Icon(Icons.search_outlined, color: kPrimaryColor),
          hintText: S.of(context).hFilter,
          border: InputBorder.none,
        ),
        onChanged: (value) {
          tab1Controller.filterCompanies(value);
        },
      ),
    );
  }
}
