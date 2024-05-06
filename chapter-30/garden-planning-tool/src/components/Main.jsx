import AvailablePlant from './AvailablePlant';
// TODO #2: Import Flowerbed component

const Main = () => {

  // Temporary test data
  let testPlants = [
    {
      id: 1,
      name: 'Hyacinth',
      color: 'blue',
      image:
        'https://drive.google.com/thumbnail?sz=w50&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I',
      numAvailable: 6,
      numAllocated: 2,
    },
    {
      id: 2,
      name: 'Tulip',
      color: 'red',
      image:
        'https://drive.google.com/thumbnail?sz=w50&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo',
      numAvailable: 6,
      numAllocated: 6,
    },
    {
      id: 3,
      name: 'Daffodil',
      color: 'yellow',
      image:
        'https://drive.google.com/thumbnail?sz=w50&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q',
      numAvailable: 4,
      numAllocated: 12,
    },
  ];

  // TODO #3: Use .map() to iterate over plants array
  // and create multiple instances of the AvailablePlant component
  // Use plant id as key

  return (
    <main>
      <div id="left-column">
        <h3>Available Plants</h3>
        {/* TODO #3: replace these 3 with mapped JSX */}
        <AvailablePlant plant={testPlants[0]} />
        <AvailablePlant plant={testPlants[1]} />
        <AvailablePlant plant={testPlants[2]} />
      </div>

      <div id="right-column">
        {/* TODO #2: Create and use Flowerbed component */}
      </div>
    </main>
  );
};

export default Main;
