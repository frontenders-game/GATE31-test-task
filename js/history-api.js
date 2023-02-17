import {readState} from './storage-utils.js'
import {FILTER_URL_PARAM} from './shared.js'

export const updateAddressBar = function () {
   const currentLoc = new URL(location.href);
   const filterValue = readState().filter
   if (filterValue) currentLoc.searchParams.set(FILTER_URL_PARAM, filterValue)
   else currentLoc.searchParams.delete(FILTER_URL_PARAM);
   history.replaceState(null, null, currentLoc.href);

}

