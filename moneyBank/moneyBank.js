export function moneyBank(sum, limits) {
  const copyLimits = { ...limits };
  return Object.entries(limits).reduceRight((result, [kupura, limit], i) => {
    const moneyPack = Math.floor(sum / kupura);
    const restMoneyLimit = limit > moneyPack ? moneyPack : limit;
    const kupuraSum = restMoneyLimit * kupura;
    sum -= kupuraSum;

    if (restMoneyLimit) {
      result.push(`${kupura}x${restMoneyLimit}`);
    }

    if (restMoneyLimit === limit) {
      delete limits[kupura];
    } else {
      limits[kupura] = limit - restMoneyLimit;
    }
    if (i === 0 && sum !== 0) {
      for (let key in copyLimits) {
        limits[key] = copyLimits[key];
      }
      return new Error('error');
    } else {
      return result;
    }
  }, []);
}
