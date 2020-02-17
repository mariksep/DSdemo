const getCourses = async () => {
  let response;
  try {
    response = await fetch(`https://www.sodexo.fi/ruokalistat/output/weekly_json/152`);

    let data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error.message);
  }
};

export{ getCourses};
