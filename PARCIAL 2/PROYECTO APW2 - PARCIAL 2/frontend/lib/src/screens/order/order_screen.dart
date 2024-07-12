import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/src/models/order_model.dart';
import 'package:genlu_delivery_v1/src/screens/order/order_controller.dart';
import 'package:genlu_delivery_v1/src/screens/order/widget/content_order.dart';
import 'package:provider/provider.dart';

class OrderScreen extends StatelessWidget {
  final OrderModel order;

  const OrderScreen(this.order, {super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<OrderController>.value(
      value: OrderController(order),
      child: Scaffold(
        appBar: AppBar(title: Text(order.store.name)),
        body: Consumer<OrderController>(
            builder: (context, orderController, child) =>
                ContentOrder(orderController)),
      ),
    );
  }
}
