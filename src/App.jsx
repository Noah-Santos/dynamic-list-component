import List from './Components/DynamicListContainer';

function App() {
  let data = ['Apple', 'Banana', 'Orange'];
  return (
    <div>
      <List data={data} type={'ol'}></List>
      <List data={['yes', 'yes', 'yes']} type={'ul'}></List>
      <List data={['One', 'Two', 'Three', 'Four']} type={'ulj'} orientation={'horizontal'}></List>
      <List data={['One', 'Two', 'Three', 'Four']} type={'ul'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'ul'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'ol'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'ul'} orientation={'horizontal'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'ol'} orientation={'horizontal'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'otfl'} orientation={'horizontal'}></List>
      <List data={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']} type={'otfl'} orientation={'horizontaiuguil'}></List>
    </div>
  );
}

export default App;
