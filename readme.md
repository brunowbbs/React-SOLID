# SOLID - REACT

O Solid foi desenhado para ser utilizado na paradigma de orientação a objetos. Mas é possível adaptar sua utilização no paradigma de programação funcional (apesar de não ser em sua forma mais pura).

SOLID é um acrônimo que representa 5 princípios

1. Single Responsibility (SRP)
2. Open-closed principle (OCP)
3. Liskov substituition principle (LSP)
4. Interface agregation principle (ISP)
5. Dependecy inversion principle (DIP)

## 1. Single Responsibility (SRP) | Principio da Responsabilidade única

- Cada classe deve possuir apenas uma responsabilidade, pois, quando a mesma for modificada vai ficar custoso essa modificação

- Levando para o React, Cada componente deve ter apenas uma única responsabilidade.

- Para garantir que nossos componentes façam uma coisa internamente, podemos:

  -> Quebrar componentes grandes que fazem muito em componentes menores
  -> Extrair código não relacionado à funcionalidade do componente principal em funções de utilitário separadas
  -> encapsular a funcionalidade conectada em custom hooks (Normalmente, se um componente possui o useEffect, poderá ser criado um customHook)

## 2. Open closed principle (OCP) | Principio do aberto e fechado

- As entidades que temos em nosso software devem estar abertas para extensão, mas fechadas para modificação.

- O princípio aberto-fechado defende a estruturação de nossos componentes de uma maneira que permita que eles sejam estendidos sem alterar seu código-fonte original.

## 3. Liskov substituition principle (LSP) | Princípio da Substituição de Liskov

- As subclasses devem ser substituíveis por suas superclasses

- Isso significa que as subclasses de uma determinada classe devem ser capazes de substituir a superclasse sem quebrar nenhuma funcionalidade.

- Exemplo
  Se PlasticDucké uma subclasse de Duck, então devemos ser capazes de substituir instâncias de Duckcom PlasticDucksem surpresas.

- No React isso significa que os componentes devem obedecer a algum tipo de contrato.

- Em sua essência, isso significa que deve haver algum tipo de contrato entre os componentes. Portanto, sempre que um componente usa outro componente, ele não deve quebrar sua funcionalidade (ou criar surpresas).

- A principal vantagem desse princípio é usar o TypeScript . Você pode trocar facilmente os componentes se eles compartilharem o mesmo contrato.

## 4. Interface segregation principle (ISP) | Princípio de segregação de interface

- De acordo com o ISP, “os clientes não devem depender de interfaces que não usam”

- Componentes não devem depender de adereços que eles não usam.

## 5. Dependency inversion principle (DIP) | Princípio de inversão de dependência

- O princípio da inversão de dependência afirma que “deve-se depender de abstrações, não de implementações”

- Em outras palavras, um componente não deve depender diretamente de outro componente, mas ambos devem depender de alguma abstração comum
