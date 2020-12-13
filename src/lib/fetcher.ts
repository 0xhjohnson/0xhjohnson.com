async function fetcher(url: string) {
  const res = await fetch(url);
  return res.json();
}

export default fetcher;
