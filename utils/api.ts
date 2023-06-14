const createURL = path => {
  return window.location.origin + path;
}

export const createNewEntry = async (entry: Entry): Promise<Entry> => {
  const res  = await fetch( new Request( createURL('/api/journal'), {
    method: 'POST',
    body: JSON.stringify(entry),
    headers: {
      'Content-Type': 'application/json'
    }
  }));

  if(res.ok) {
    const data = await res.json();
    console.log({data});
    return data.data;
  }

  
}