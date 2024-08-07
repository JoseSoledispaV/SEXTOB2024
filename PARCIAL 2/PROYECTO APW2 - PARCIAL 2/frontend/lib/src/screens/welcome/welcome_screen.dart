import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/constants/constants.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/bloc/location_bloc.dart';
import 'package:genlu_delivery_v1/src/common/launch.dart';
import 'package:genlu_delivery_v1/src/models/address_model.dart';
import 'package:genlu_delivery_v1/src/screens/address/address_screen.dart';
import 'package:genlu_delivery_v1/src/screens/login/login_screen.dart';
import 'package:genlu_delivery_v1/src/widgets/primary_button.dart';
import 'package:genlu_delivery_v1/src/widgets/secondary_button.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({super.key});

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      padding: const EdgeInsets.all(kDefaultPadding),
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: kDefaultPadding * 3),
            const Image(image: AssetImage('assets/screen/welcome.png')),
            const SizedBox(height: kDefaultPadding),
            Text(S.of(context).tWelcome,
                style: const TextStyle(fontSize: 18),
                textAlign: TextAlign.center),
            const SizedBox(height: kDefaultPadding),
            PrimaryButton(
                text: S.of(context).bEstablishLocation,
                onPressed: _goToAddressScreen),
            const SizedBox(height: 20.0),
            Center(child: Text(S.of(context).mEither)),
            const SizedBox(height: 20.0),
            SecondaryButton(
                text: S.of(context).bLogin, onPressed: _goToSigninScreen),
            const SizedBox(height: kDefaultPadding * 2),
            const Text(
                'By using our service you agree to our Terms & Privacy Policy\nV: $kVersionn\nPowered by Genlu Delivery',
                textScaleFactor: 0.8,
                textAlign: TextAlign.center),
            const SizedBox(height: kDefaultPadding),
            TextButton(
                onPressed: () => goToUrl(
                    'https://shop.genlu.xyz/#/'),
                child: const Text(
                  'Privacy Policy',
                  style: TextStyle(color: Colors.indigo),
                )),
            // TextButton(
            //     onPressed: () => goToUrl(
            //         'https://genlu_delivery_v1.biz/terminos-y-condiciones'),
            //     child: const Text(
            //       'Terms and Conditions',
            //       style: TextStyle(color: Colors.indigo),
            //     )),
            // const SizedBox(height: kDefaultPadding * 3),
          ],
        ),
      ),
    ));
  }

  _goToAddressScreen() async {
    LocationBloc().determinePosition();
    AddressModel address =
        AddressModel(location: Location(x: klatitudeMap, y: klongitudeMap));
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => AddressScreen(address: address),
      ),
    );
  }

  _goToSigninScreen() async {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const LoginScreen(),
      ),
    );
  }
}
