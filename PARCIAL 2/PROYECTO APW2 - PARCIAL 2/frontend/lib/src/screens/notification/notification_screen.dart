import 'package:flutter/material.dart';
import 'package:genlu_delivery_v1/generated/l10n.dart';
import 'package:genlu_delivery_v1/src/models/notification_model.dart';
import 'package:genlu_delivery_v1/src/screens/notification/widget/list_notifications.dart';

class NotificacionPage extends StatefulWidget {
  const NotificacionPage({Key? key}) : super(key: key);

  @override
  createState() => _NotificacionPageState();
}

class _NotificacionPageState extends State<NotificacionPage> {
  final List<NotificationModel> notifications = [];

  @override
  void initState() {
  

    notifications.add(NotificationModel(
  
    ));

    notifications.add(NotificationModel(
   
    ));

    notifications.add(NotificationModel(
    ));

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:
          AppBar(centerTitle: true, title: Text(S.of(context).tNotifications)),
      body: Center(
        child: Column(
          children: <Widget>[
            const SizedBox(height: 10.0),
            Expanded(child: ListNotifications(notifications)),
          ],
        ),
      ),
    );
  }
}
