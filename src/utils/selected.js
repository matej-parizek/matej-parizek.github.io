  const totalYearsExpirience =  (yearsOfCommercialExperience) =>  yearsOfCommercialExperience.reduce((total, exp) => {
    const start = exp.startDate.getTime();
    const end = exp.endDate ? exp.endDate.getTime() : new Date().getTime();
    const durationInYears = (end - start) / (1000 * 60 * 60 * 24 * 365);
    return total + durationInYears;
  }, 0);

export { totalYearsExpirience };