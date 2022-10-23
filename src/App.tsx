import DependencyInversionPrinciple from "./SOLID/DependencyInversionPrinciple/_index";
import InterfaceSegregationPrinciple from "./SOLID/InterfaceSegregationPrinciple /_index";
import LiskovSubstituitonPrinciple from "./SOLID/LiskovSubstituitionPrinciple/_index";
import OpenClosedPrinciple from "./SOLID/OpenClosePrinciple/_index";
import SingleResponsibility from "./SOLID/SingleResponsability/_index";

function App() {
  return (
    <div>
      <LiskovSubstituitonPrinciple />
      <SingleResponsibility />
      <OpenClosedPrinciple />
      <InterfaceSegregationPrinciple />
      <DependencyInversionPrinciple />
    </div>
  );
}

export default App;
