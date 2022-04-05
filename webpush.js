const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BKD8Ztu4_WQ2QUgmWXGegDkC4-7E2jSZg6gFphjOn9GzGMhcqE0YgjkKdP_Da82HGK1gCEbZBmyAjT_x1-qh0Hs',
  privateKey: 'dgvHvFPpElW5xxmP00mbpkSP8_5w_kcVv8RFImji_sY'
};

webpush.setVapidDetails(
  'mailto:vrajdoshi48@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');