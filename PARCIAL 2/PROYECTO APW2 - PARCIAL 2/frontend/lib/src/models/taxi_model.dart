import 'package:genlu_delivery_v1/src/models/address_model.dart';

class TaxiModel {
  TaxiModel({
    required this.from,
    required this.to,
  });

  AddressModel from;
  AddressModel to;
}
