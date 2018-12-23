const fetchHomeworld = async id => {
  try {
    const res = await fetch(`${id}`);

    if (res && res.ok) {
      const data = await res.json();

      return data;
    }

    return null;
  } catch (err) {
    return null;
  }
};

export default fetchHomeworld;
