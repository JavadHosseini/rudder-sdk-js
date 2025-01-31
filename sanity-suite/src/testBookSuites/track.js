import track1ExpectedData from '../../__mocks__/track1.json';
import track2ExpectedData from '../../__mocks__/track2.json';
import track4ExpectedData from '../../__mocks__/track4.json';
import track5ExpectedData from '../../__mocks__/track5.json';
import track6ExpectedData from '../../__mocks__/track6.json';
import track7ExpectedData from '../../__mocks__/track7.json';

const trackMethodSuite = {
  id: 'trackMethod',
  name: 'Track',
  description:
    'Track Method: rudderanalytics.track(event, [properties], [apiOptions], [callback]);',
  testCases: [
    {
      id: 'track1',
      description: 'Call with all arguments and all primitives in properties and apiOptions',
      inputData: [
        'Order Completed',
        {
          revenue: 30,
          currency: 'USD',
          user_actual_id: 12345,
          productId: '234567-sdfghj-345tygh-567890dfghj',
          productCategory: 'clothing',
          paid: true,
          paymentMode: 4,
          paymentModeName: 'online',
          productSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          sampleObj: {
            sampleObj1: {
              newKey: 'sample text',
            },
            newKey1: 3456789009876543,
          },
        },
        {
          key1: [1, 2, 3, 4],
          key2: 'sample text',
          key3: false,
          key4: 9087654,
          key5: {
            key6: 'sample text 2',
            key7: [
              {
                color: '#3456789',
                name: null,
              },
              {
                color: '#3456767',
                name: 'Red',
              },
            ],
          },
          key8: null,
          key9: undefined,
          device: {
            id: 'sdfghj567-cghj5678-fghjvbn888',
          },
          library: {
            name: 'Random JavaScript SDK',
            version: '2.22.0',
          },
          context: {
            metaData: {
              appVersion: '2.8.0',
              appId: '1hKOmRA4GRlm',
              release_stage: 'Production',
            },
          },
          integrations: {
            All: false,
            'Google Analytics': true,
            Amplitude: true,
          },
          anonymousId: 'sample anonymousId',
          originalTimestamp: '2023-01-13T08:13:58.548Z',
          channel: 'random',
          traits: {
            subscribed: true,
            plan: 'Gold',
            endDate: '2023-04-13T08:13:58.548Z',
            startDate: '2023-01-13T08:13:58.548Z',
          },
        },
      ],
      expectedResult: track1ExpectedData,
      triggerHandler: 'track',
    },
    {
      id: 'track2',
      description: 'Call with event name, properties as arguments with all possible data types',
      inputData: [
        'Order Completed',
        {
          revenue: 30,
          currency: 'USD',
          user_actual_id: 12345,
          productId: '234567-sdfghj-345tygh-567890dfghj',
          productCategory: 'clothing',
          paid: true,
          paymentMode: 4,
          paymentModeName: 'online',
          productSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          sampleObj: {
            sampleObj1: {
              newKey: 'sample text',
            },
            newKey1: 3456789009876543,
          },
        },
      ],
      expectedResult: track2ExpectedData,
      triggerHandler: 'track',
    },
    {
      id: 'track3',
      description:
        'Call with event name, properties and null apiOptions as arguments with all possible data types',
      inputData: [
        'Order Completed',
        {
          revenue: 30,
          currency: 'USD',
          user_actual_id: 12345,
          productId: '234567-sdfghj-345tygh-567890dfghj',
          productCategory: 'clothing',
          paid: true,
          paymentMode: 4,
          paymentModeName: 'online',
          productSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          sampleObj: {
            sampleObj1: {
              newKey: 'sample text',
            },
            newKey1: 3456789009876543,
          },
        },
        null,
      ],
      expectedResult: track2ExpectedData,
      triggerHandler: 'track',
    },
    {
      id: 'track4',
      description:
        'Call with event name, null properties and apiOptions as arguments with all possible data types',
      inputData: [
        'Order Completed',
        null,
        {
          key1: [1, 2, 3, 4],
          key2: 'sample text',
          key3: false,
          key4: 9087654,
          key5: {
            key6: 'sample text 2',
            key7: [
              {
                color: '#3456789',
                name: null,
              },
              {
                color: '#3456767',
                name: 'Red',
              },
            ],
          },
          key8: null,
          key9: undefined,
          device: {
            id: 'sdfghj567-cghj5678-fghjvbn888',
          },
          library: {
            name: 'Random JavaScript SDK',
            version: '2.22.0',
          },
          context: {
            metaData: {
              appVersion: '2.8.0',
              appId: '1hKOmRA4GRlm',
              release_stage: 'Production',
            },
          },
          integrations: {
            All: false,
            'Google Analytics': true,
            Amplitude: true,
          },
          anonymousId: 'sample anonymousId',
          originalTimestamp: '2023-01-13T08:13:58.548Z',
          channel: 'random',
          traits: {
            subscribed: true,
            plan: 'Gold',
            endDate: '2023-04-13T08:13:58.548Z',
            startDate: '2023-01-13T08:13:58.548Z',
          },
        },
      ],
      expectedResult: track4ExpectedData,
      triggerHandler: 'track',
    },
    {
      id: 'track5',
      description: 'Call with only event name as argument',
      inputData: ['Order Completed'],
      expectedResult: track5ExpectedData,
      triggerHandler: 'track',
    },
    {
      id: 'track6',
      description: 'Scenarios where no identify is called before track',
      inputData: [
        [true],
        [
          'Order Completed',
          {
            revenue: 30,
            currency: 'USD',
            user_actual_id: 12345,
            productId: '234567-sdfghj-345tygh-567890dfghj',
            productCategory: 'clothing',
            paid: true,
            paymentMode: 4,
            paymentModeName: 'online',
            productSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            sampleObj: {
              sampleObj1: {
                newKey: 'sample text',
              },
              newKey1: 3456789009876543,
            },
          },
        ],
      ],
      expectedResult: track6ExpectedData,
      triggerHandler: ['reset', 'track'],
    },
    {
      id: 'track7',
      description: 'Consent denied category Ids are attached to context object of track',
      inputData: [
        [true],
        [],
        [
          'Order Completed',
          {
            revenue: 30,
            currency: 'USD',
            user_actual_id: 12345,
            productId: '234567-sdfghj-345tygh-567890dfghj',
            productCategory: 'clothing',
            paid: true,
            paymentMode: 4,
            paymentModeName: 'online',
            productSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            sampleObj: {
              sampleObj1: {
                newKey: 'sample text',
              },
              newKey1: 3456789009876543,
            },
          },
        ],
      ],
      expectedResult: track7ExpectedData,
      triggerHandler: [
        'reset',
        () => {
          window.OneTrust = {
            GetDomainData: () => ({
              Groups: [
                { CustomGroupId: 'C0001', GroupName: 'Functional Cookies' },
                { CustomGroupId: 'C0002', GroupName: 'Performance Cookies' },
                { CustomGroupId: 'C0003', GroupName: 'Analytical Cookies' },
                { CustomGroupId: 'C0004', GroupName: 'Targeting Cookies' },
                { CustomGroupId: 'C0005', GroupName: 'Social Media Cookies' },
                { CustomGroupId: 'C0006', GroupName: 'Advertisement Cookies' },
              ],
            }),
          };
          window.OnetrustActiveGroups = ',C0001,C0003,';
        },
        'track',
      ],
      resetWindow: () => {
        window.OneTrust = undefined;
        window.OnetrustActiveGroups = undefined;
      },
    },
  ],
};

export { trackMethodSuite };
