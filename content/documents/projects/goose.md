---
title: 'GOOSE'
fileName: 'goose.cpp'
type: 'cpp'
image: '/content_img/about/goose.png'
gitUrl: 'https://github.com/Argonne-National-Laboratory/goose'
reportUrl: 'https://publications.anl.gov/anlpubs/2020/08/161661.pdf'
---

::hero{:image-src="image" :rounded="false" :gradient="true"}

## GOOSE

::

::text-box{title="Tech Stacks" :display-border="false" :rounded="true" border-color="light-1"}

- C++
- python
- bash
- MOOSE

::

GOOSE (Graphite object-oriented software environment) was developed to adequately model a graphite core component by taking into account various working conditions & changing material properties, and predict the overall state of the core at peak workloads.
<br></br>
GOOSE was developed based on the finite element software MOOSE, allowing us to easily model complex mathematical models by stacking together the different physics modules needed to represent the problem.
<br></br>
All the different phenomena present in the graphite core: convection, radiation, creep, swelling, etc. are supported by calling different modules in the input file. 
<br></br>
A separate postprocessing code (only available as a privately held repository inside ANL) allows the user to to rate the quality of the core and establish both its operational limits and maintenance requirements based on the ASME rules inside BPVC Section III, Division 5, Article HHA-3000.
<br></br>
Please see the report for a full demonstration of the software.


::flex-container

::git-button{:url="gitUrl" color="warning"}
Repository

::

::button-link{:url="reportUrl"}

Report
::

::