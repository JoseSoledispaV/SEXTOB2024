import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/src/models/product_model.dart';
import 'package:genlu_delivery_v1/src/screens/cart/widget/cart_product.dart';

class CartBody extends StatelessWidget {
  final List<ProductModel> products;

  const CartBody({
    Key? key,
    required this.products,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: products.length,
      itemBuilder: (context, index) => Container(
        margin: const EdgeInsets.all(kDefaultPadding * 0.3),
        child: CartProduct(product: products[index]),
      ),
    );
  }
}
