import fullSchemaPreNeed from 'vets-json-schema/dist/40-10007-schema.json';

import applicantDescription from 'platform/forms/components/ApplicantDescription';

import { pick } from 'lodash';
import {
  applicantDemographicsDescription,
  applicantDemographicsSubHeader,
  veteranUI,
} from '../../utils/helpers';

const { veteran } = fullSchemaPreNeed.properties.application.properties;

export const uiSchema = {
  'ui:description': applicantDescription,
  application: {
    'ui:title': applicantDemographicsSubHeader,
    'ui:description': applicantDemographicsDescription,
    veteran: veteranUI,
  },
};
export const schema = {
  type: 'object',
  properties: {
    application: {
      type: 'object',
      properties: {
        veteran: {
          type: 'object',
          required: ['gender', 'race', 'maritalStatus'],
          properties: pick(veteran.properties, [
            'gender',
            'race',
            'maritalStatus',
          ]),
        },
      },
    },
  },
};
