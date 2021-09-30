const conversations = [
    {
        contact: {
            conversationRead: false,
            contactId: 12345,
            firstName: 'John M',
            lastName: 'Bradley',
            primaryEmailAddress: 'john.m.bradley@gmail.com',
            primaryPhoneNumber: '2125551234',
        },
        messages: [
            {
                messageId: 1,
                documentType: 'SmsInteraction',
                messageBody: 'Then you begin to make it better',
                timestamp: '2021-09-29T19:09:12.359Z',
            },
            {
                messageId: 2,
                documentType: 'SmsComm',
                messageBody: 'The minute you let her under your skin',
                timestamp: '2021-09-29T19:10:12.359Z',
            },
            {
                messageId: 3,
                documentType: 'SmsInteraction',
                messageBody: 'You were made to go out and get her',
                timestamp: '2021-09-29T19:11:12.359Z',
            },
            {
                messageId: 4,
                documentType: 'SmsComm',
                messageBody: 'Hey Jude, don\'t be afraid',
                timestamp: '2021-09-29T19:12:13.359Z',
            },
            {
                messageId: 5,
                documentType: 'SmsInteraction',
                messageBody: 'Then you can start to make it better',
                timestamp: '2021-09-29T19:09:12.359Z',
            },
            {
                messageId: 6,
                documentType: 'SmsComm',
                messageBody: 'Remember to let her into your heart',
                timestamp: '2021-09-29T19:09:13.359Z',
            },
            {
                messageId: 7,
                documentType: 'SmsInteraction',
                messageBody: 'Take a sad song and make it better',
                timestamp: '2021-09-29T19:09:12.359Z',
            },
            {
                messageId: 8,
                documentType: 'SmsComm',                
                messageBody: 'Hey Jude, don\'t make it bad.',
                timestamp: '2021-09-29T19:09:13.359Z',
            },
        ],
    },
    {
        contact: {
            conversationRead: true,
            contactId: 12346,
            firstName: null,
            lastName: null,
            primaryEmailAddress: null,
            primaryPhoneNumber: '2125551235',
        },
        messages: [
            {
                messageId: 9,
                documentType: 'SmsInteraction',
                messageBody: 'There\'s a fire within my soul',
                timestamp: '2021-09-28T19:09:12.359Z',
            },
            {
                messageId: 10,
                documentType: 'SmsComm',
                messageBody: 'I don\'t know how, but I suddenly lose control',
                timestamp: '2021-09-28T19:10:12.359Z',
            },
            {
                messageId: 11,
                documentType: 'SmsInteraction',
                messageBody: 'Look at me now, will I ever learn',
                timestamp: '2021-09-28T19:11:12.359Z',
            },
            {
                messageId: 12,
                documentType: 'SmsComm',
                messageBody: 'So I made up my mind, it must come to an end',
                timestamp: '2021-09-28T19:12:12.359Z',
            },
            {
                messageId: 13,
                documentType: 'SmsInteraction',
                messageBody: 'I\'ve been cheated by you since I don\'t know when',
                timestamp: '2021-09-28T19:13:12.359Z',
            },
        ],
    },
    {
        contact: {
            conversationRead: true,
            contactId: 12347,
            firstName: 'Tyrrell',
            lastName: 'Andrijana',
            primaryEmailAddress: 't.Andrijana@gmail.com',
            primaryPhoneNumber: '2125551236',
        },
        messages: [
            {
                messageId: 14,
                documentType: 'FacebookInteraction',
                messageBody: 'Me, to me',
                timestamp: '2021-09-27T19:09:12.359Z',
            },
            {
                messageId: 15,
                documentType: 'FacebookComm',
                messageBody: 'Any way the wind blows doesn\'t really matter to',
                timestamp: '2021-09-27T19:10:12.359Z',
            },
            {
                messageId: 16,
                documentType: 'FacebookInteraction',
                messageBody: 'Little high, little low',
                timestamp: '2021-09-27T19:11:12.359Z',
            },
            {
                messageId: 17,
                documentType: 'FacebookComm',
                messageBody: 'Because I\'m easy come, easy go',
                timestamp: '2021-09-27T19:12:12.359Z',
            },
            {
                messageId: 18,
                documentType: 'FacebookInteraction',
                messageBody: 'I\'m just a poor boy, I need no sympathy',
                timestamp: '2021-09-27T19:13:12.359Z',
            },
            {
                messageId: 19,
                documentType: 'FacebookComm',
                messageBody: 'Look up to the skies and see',
                timestamp: '2021-09-27T19:14:12.359Z',
            },
            {
                messageId: 20,
                documentType: 'FacebookInteraction',
                messageBody: 'Open your eyes',
                timestamp: '2021-09-27T19:15:12.359Z',
            },
            {
                messageId: 21,
                documentType: 'FacebookComm',
                messageBody: 'No escape from reality',
                timestamp: '2021-09-27T19:16:12.359Z',
            },
            {
                messageId: 22,
                documentType: 'FacebookInteraction',
                messageBody: 'Caught in a landside',
                timestamp: '2021-09-27T19:17:12.359Z',
            },
            {
                messageId: 23,
                documentType: 'FacebookComm',
                messageBody: 'Is this just fantasy?',
                timestamp: '2021-09-27T19:18:12.359Z',
            },
            {
                messageId: 24,
                documentType: 'FacebookInteraction',
                messageBody: 'Is this the real life?',
                timestamp: '2021-09-27T19:19:12.359Z',
            },
        ],
    },
    {
        contact: {
            conversationRead: true,
            contactId: 12348,
            firstName: 'Ivo',
            lastName: 'Haris',
            primaryEmailAddress: 't.Andrijana@gmail.com',
            primaryPhoneNumber: '2125551236',
        },
        messages: [
            {
                messageId: 25,
                documentType: 'PhoneCallComm',
                messageBody: 'In other words, baby, kiss me',
                timestamp: '2021-09-26T19:09:12.359Z',
            },
            {
                messageId: 26,
                documentType: 'PhoneCallComm',
                messageBody: 'In other words, hold my hand',
                timestamp: '2021-09-26T19:10:12.359Z',
            },
            {
                messageId: 27,
                documentType: 'PhoneCallComm',
                messageBody: 'A-Jupiter and Mars',
                timestamp: '2021-09-26T19:11:12.359Z',
            },
            {
                messageId: 28,
                documentType: 'PhoneCallComm',
                messageBody: 'Let me see what spring is like on',
                timestamp: '2021-09-26T19:12:12.359Z',
            },
            {
                messageId: 29,
                documentType: 'PhoneCallComm',
                messageBody: 'Let me play among the stars',
                timestamp: '2021-09-26T19:13:12.359Z',
            },
            {
                messageId: 30,
                documentType: 'PhoneCallComm',
                messageBody: 'Fly me to the moon',
                timestamp: '2021-09-26T19:14:12.359Z',
            },
        ],
    },
    {
        contact: {
            conversationRead: true,
            contactId: 12349,
            firstName: null,
            lastName: null,
            primaryEmailAddress: 'k.tychon@gmail.com',
            primaryPhoneNumber: null,
        },
        messages: [
            {
                messageId: 31,
                documentType: 'AgentzInteraction',
                messageBody: 'Pa\' que no sepan en cuál de ellas lleva el puñal',
                timestamp: '2021-09-25T19:09:12.359Z',
            },
            {
                messageId: 32,
                documentType: 'AgentzComm',
                messageBody: 'Las manos siempre en los bolsillos de su gabán',
                timestamp: '2021-09-25T19:10:12.359Z',
            },
            {
                messageId: 33,
                documentType: 'AgentzInteraction',
                messageBody: 'Con el tumba\'o que tienen los guapos al caminar',
                timestamp: '2021-09-25T19:11:12.359Z',
            },
            {
                messageId: 34,
                documentType: 'AgentzComm',
                messageBody: 'Por la esquina del viejo barrio lo vi pasar',
                timestamp: '2021-09-25T19:12:12.359Z',
            },
    ],
    },
];

export default conversations;
