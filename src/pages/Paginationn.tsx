import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination'


const Paginationn = () => {
  return (
    <>
    
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious/>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext/>
    </PaginationItem>
  </PaginationContent>
</Pagination>
</>
  )
}

export default Paginationn