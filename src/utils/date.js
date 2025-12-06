const MS_DAY = 1000 * 60 * 60 * 24;


export const calculateDuration = (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / MS_DAY);
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    return { years, months };
};

export const formatDuration = (duration) => {
    const { years, months } = duration;
    let result = '';
    if (years > 0) {
        result += `${years}y `;
    }
    if (months > 0) {
        result += `${months}m`;
    }
    if(months === 0 && years === 0) {
        result = '<1m';
    }
    return result.trim();
};

export const formatDate = (date)  =>{
  if (!date) return '';

  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export const formatYears = (years) => {
    return years % 1 === 0 ? `${years}` : `${years.toFixed(1)}+`;
}
