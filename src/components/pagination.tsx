import { Pagination } from 'react-bootstrap';
export default function RCom() {
  return (
    <>
      <Pagination>
        <Pagination.Item>Previous</Pagination.Item>

        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
      </Pagination>
    </>
  );
}
