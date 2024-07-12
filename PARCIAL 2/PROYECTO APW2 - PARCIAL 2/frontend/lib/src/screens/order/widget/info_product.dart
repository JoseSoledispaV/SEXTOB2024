import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/src/models/order_model.dart';
import 'package:genlu_delivery_v1/src/widgets/avatar_image.dart';

class InfoProduct extends StatelessWidget {
  const InfoProduct({
    Key? key,
    required this.order,
  }) : super(key: key);

  final OrderModel order;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: order.products.length,
      itemBuilder: (context, index) => ListTile(
        title: Text(
            '(${order.products[index].number}) ${order.products[index].name} ${order.products[index].total.toStringAsFixed(kCoinDecimals)}'),
        subtitle: Text(order.products[index].description),
        trailing: AvatarImage(image: order.products[index].image),
      ),
    );
  }
}
