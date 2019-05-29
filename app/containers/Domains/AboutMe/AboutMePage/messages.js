/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Domains.AboutMe.AboutMePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Ehren Davis',
  },
  subMessage: {
    id: `${scope}.subMessage`,
    defaultMessage: 'Sr. Developer at Hyland .Inc!',
  },
});
