import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/common/launch.dart';
import 'package:genlu_delivery_v1/src/provider/preferences_provider.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';
// import 'package:genlu_delivery_v1/src/widgets/secondary_button.dart';

class AboutScreen extends StatelessWidget {
  AboutScreen({super.key});

  final pref = PreferencesProvider();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(S.of(context).tAbout)),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
              child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(kDefaultPadding),
              child: Column(
                children: [
                  const SizedBox(height: kDefaultPadding * 3),
                  GestureDetector(
                    onTap: () {
                      // goToUrl('https://udemy.genlu_delivery_v1.biz/lili');
                    },
                    child: Image.asset("assets/screen/icon.png", height: 200),
                  ),
                  const SizedBox(height: kDefaultPadding * 3),
                  PrimaryButton(
                    icon: Icons.download,
                    color: Theme.of(context).colorScheme.secondary,
                    text: 'Genlu Delivery',
                    onPressed: () =>
                       {}// ,
                  ),
                  const SizedBox(height: kDefaultPadding),
                  const Text(
                    "Genlu Delivery",
                    textAlign: TextAlign.center,
                  ),
                  // const SizedBox(height: kDefaultPadding),
                  // SecondaryButton(
                  //   color: Theme.of(context).colorScheme.secondary,
                  //   text: 'Terms and Conditions',
                  //   onPressed: () => goToUrl(
                  //       'https://genlu_delivery_v1.biz/terminos-y-condiciones'),
                  // ),
                  // const SizedBox(height: kDefaultPadding),
                  // SecondaryButton(
                  //   color: Theme.of(context).colorScheme.secondary,
                  //   text: 'Privacy Policy',
                  //   onPressed: () => goToUrl(
                  //       'https://genlu_delivery_v1.biz/politica-de-privacidad'),
                  // )
                ],
              ),
            ),
          )),
          PrimaryButton(
            color: Theme.of(context).colorScheme.secondary,
            text: 'Powered by Genlu',
            onPressed: () => goToUrl('https://shop.genlu.xyz/#/'),
          )
        ],
      ),
    );
  }
}
