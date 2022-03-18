
// // send-email.js
// import qs from 'qs';
// import { Linking } from 'react-native';

function foo() { console.log('foo') }
function bar() { console.log('bar') }
function baz() { foo(); bar() }

export default {foo, bar, baz}



// export async function sendEmail(to, subject, body, options = {}) {
//     const { cc } = options;
//     const email = {
//                 subject: subject,
//                 body: body,
//                 cc: cc
//             };
//             return 'hello'
//         }
// export async function sendEmail(to, subject, body, options = {}) {
//     const { cc, bcc } = options;

//     let url = `mailto:${to}`;

//     // Create email link query
//     const query = qs.stringify({
//         subject: subject,
//         body: body,
//         cc: cc,
//         bcc: bcc
//     });

//     if (query.length) {
//         url += `?${query}`;
//     }

//     // check if we can use this link
//     const canOpen = await Linking.canOpenURL(url);

//     if (!canOpen) {
//         throw new Error('Provided URL can not be handled');
//     }

//     return Linking.openURL(url);
// }