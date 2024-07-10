import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/src/models/store_company_model.dart';
import 'package:genlu_delivery_v1/src/screens/manager/company/company_controller.dart';
import 'package:genlu_delivery_v1/src/screens/manager/products/products_screen.dart';
import 'package:genlu_delivery_v1/src/widgets/avatar_image.dart';

class CompanyCard extends StatelessWidget {
  const CompanyCard(
    this.companyController, {
    required this.storeCompany,
    Key? key,
  }) : super(key: key);

  final CompanyController companyController;
  final StoreCompanyModel storeCompany;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(kDefaultPadding),
      child: Column(
        children: [
          ListTile(
            onTap: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) =>
                      ProductsScreen(storeCompany: storeCompany),
                ),
              );
            },
            trailing:
                AvatarImage(image: storeCompany.company.marker, width: 35),
            leading: AvatarImage(image: storeCompany.company.image),
            title: Text(storeCompany.name),
            subtitle: Text(storeCompany.address),
          ),
          const Divider(color: kPrimaryColor, thickness: 1)
        ],
      ),
    );
  }
}
