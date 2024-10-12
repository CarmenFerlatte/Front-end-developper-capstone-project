export const validateDate = (date) => {
    if (!date) return 'La date est requise.';
    return '';
  };

  export const validateTime = (time) => {
    if (!time) return "L'heure est requise.";
    return '';
  };

  export const validateGuests = (guests) => {
    if (guests === '') return 'Le nombre de personnes est requis.';
    if (guests < 1 || guests > 10) return 'Le nombre de personnes doit être entre 1 et 10.';
    return '';
  };

  export const validateOccasion = (occasion) => {
    if (!occasion) return "L'évènement est requis.";
    return '';
  };