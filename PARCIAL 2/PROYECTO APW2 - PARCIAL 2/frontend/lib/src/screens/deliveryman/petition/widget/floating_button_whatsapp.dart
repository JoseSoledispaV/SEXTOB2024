import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/constants/status_constant.dart';
import 'package:genlu_delivery_v1/src/common/launch.dart';
import 'package:genlu_delivery_v1/src/models/petition_model.dart';
import 'package:genlu_delivery_v1/src/widgets/circular_button.dart';

class FloatingButtonWhatsapp extends StatelessWidget {
  const FloatingButtonWhatsapp({
    Key? key,
    required this.petition,
  }) : super(key: key);

  final PetitionModel petition;

  @override
  Widget build(BuildContext context) {
    return petition.status == StatusOrder.assigned
        ? Positioned(
            top: 120,
            right: kDefaultPadding,
            child: CircularButton(
              icon: const Icon(Icons.whatshot_outlined,
                  color: kPrimaryColor, size: 40),
              onPressed: () {
                sendWhatsapp(petition.store.contact,
                    '${petition.user.fullName}\n${petition.products.join('\n')}');
              },
            ),
          )
        : Container();
  }
}
