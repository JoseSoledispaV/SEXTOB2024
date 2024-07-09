import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/src/screens/store/store_controller.dart';

class GroupProduct extends StatelessWidget {
  const GroupProduct({
    Key? key,
    required this.storeController,
  }) : super(key: key);

  final StoreController storeController;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(
        left: kDefaultPadding * 0.2,
        bottom: kDefaultPadding * 0.2,
      ),
      width: double.infinity,
      height: 44,
      child: ListView.builder(
        physics: const BouncingScrollPhysics(),
        scrollDirection: Axis.horizontal,
        itemCount: storeController.groups.length,
        itemBuilder: (BuildContext context, int index) {
          return Padding(
            padding: const EdgeInsets.only(right: kDefaultPadding * 0.5),
            child: TextButton(
              style: ButtonStyle(
                backgroundColor: storeController.groups[index].id ==
                        storeController.groupSelected.id
                    ? MaterialStateProperty.all(kPrimaryColor)
                    : MaterialStateProperty.all(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(kDefaultPadding),
                    side: const BorderSide(color: kPrimaryColor),
                  ),
                ),
                padding: MaterialStateProperty.all(
                    const EdgeInsets.symmetric(horizontal: 20, vertical: 0)),
                textStyle:
                    MaterialStateProperty.all(const TextStyle(fontSize: 14)),
              ),
              onPressed: () {
                storeController.groupSelected = storeController.groups[index];
              },
              child: Text(
                storeController.groups[index].name,
                style: TextStyle(
                    color: storeController.groups[index].id !=
                            storeController.groupSelected.id
                        ? kPrimaryColor
                        : Colors.white),
              ),
            ),
          );
        },
      ),
    );
  }
}
