import React, { createElement } from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

const In = createElement('input', {
  type: 'password',
  style: { backgroundColor: 'yellow' },
});

type CloneElementProps = {
  color: string;
  value?: number;
  children: React.ReactNode;
};
const CloneElement = React.forwardRef<HTMLInputElement, CloneElementProps>(
  function CloneElement({ color, value, children }, ref) {
    const val = value ? 10 + value : 10;

    return (
      <div style={{ color }}>
        {val}
        <input ref={ref} />
        {children}
      </div>
    );
  },
);

console.log(React.isValidElement(In));
console.log(React.isValidElement('div'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunk = (input: any[], size = 1) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? // 새로운 배열 생성
        [...arr, [item]]
      : // 맨 뒤 배열에 엘리먼트 추가
        [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], -3));
console.log(chunk(['a', 'b', ['c', 'd'], 'e'], 3));

// in place 함수가 아니라, 순수 함수를 구현
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compact = (arr: any[]) => arr.filter(Boolean);
console.log(compact([0, 1, false, 2, '', undefined, null, NaN, 3]));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const concat = (arr: any[], ...others: any[]) => arr.concat(...others);
console.log(concat([1], 2, [3], [[4]]));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const difference = (arr1: any[], arr2: any[]) =>
  [arr1, arr2].reduce((a, b) => a.filter((c) => !b.includes(c)));
console.log(difference([1, 2, 3, 4, 5, 2, 2], [5, 2, 10]));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const differenceBy = (arr1: any[], arr2: any[], iteratee: (e: any) => any) => {
  const b = arr2.map((e) => iteratee(e));
  return [arr1, b].reduce((a, b) => a.filter((a) => !b.includes(iteratee(a))));
};
console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// differenceWith

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const drop = (arr: any[], n = 1) => arr.slice(n); // 얕은 복사
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 0));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dropRight = (arr: any[], n = 1) => arr.slice(0, -n);
console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));

// dropRightWhile

// dropWhile

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fill = (arr: any[], value: any, start = 0, end = arr.length) =>
  arr.fill(value, start, end);
console.log(fill([1, 2, 3], 'a'));
console.log(fill(Array(3), 2));
console.log(fill([4, 6, 8, 10], '*', 1, 3));

const find = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collection: any[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  predicate: (value: any, index?: number, collection?: any[]) => boolean,
  fromIndex = 0,
) =>
  drop(collection, fromIndex).find((e, idx) => predicate(e, idx, collection));

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];
console.log(find(users, (user) => user.age > 36));
// console.log(find(users, { age: 1, active: true }));
// console.log(find(users, ['active', false]));
// console.log(find(users, 'active'));

// findIndex

// findLastIndex

// console.log(Array(3));
// console.log(Array(3).length);
// console.log(Array(3)[0]);

// console.log(
//   {
//     a: 1,
//   } ===
//     {
//       a: 1,
//     },
// );
// const a = { a: 1 };
// console.log(a === a);

// const a = { val: 1 };
// const b = { val: 2 };
// const arr = [a, b].slice(1);
// arr[0].val = 100;
// console.log(b, arr[0]);

const App: React.FC = () => {
  const spanRef = React.useRef<HTMLInputElement>(null);
  const [el, setEl] = React.useState(
    <CloneElement ref={spanRef} color="red">
      <div>자식</div>
    </CloneElement>,
  );

  return (
    <>
      {In}
      {el}
      <button
        onClick={() => {
          setEl(React.cloneElement(el, { value: 100 }, <div>자식2</div>));
        }}
      >
        cloneElement
      </button>
      <button onClick={() => spanRef.current?.focus()}>포커스</button>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default App;
