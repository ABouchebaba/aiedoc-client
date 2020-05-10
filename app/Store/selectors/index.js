import { createSelector } from "reselect";

export const default_selector = createSelector(
  (state) => state.init,
  (init) => !init.loading
);

export const available_sps = createSelector(
  [(state) => state.spFilter, (state) => state.sps.sps],
  (filter, sps) => {
    let filtered = sps;
    if (filter.gender)
      filtered = filtered.filter((sp) => sp.sex === filter.gender);

    if (Object.keys(filter.services).length > 0)
      filtered = filtered.filter((sp) => {
        for (let i = 0; i < sp.services.length; i++) {
          if (filter.services[sp.services[i]]) return true;
        }
        return false;
      });

    return filtered;
  }
);
