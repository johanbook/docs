# Data

**Data** is crucial for any form of modelling. There are several phases to
obtain quality data. Which exact phases are needed depends on the domain of the
data.

There are various techniques: wrangling, Extract Transform Load (ETL).

## Governance

**Data governance** is policies for how data can be collected, stored, processed
and procedure for disposal.

## Gathering

First step is collect the data. This can be done e.g. manually or
semi-automatically.

## Annotation

Commonly one needs to annotate the data, meaning one adds additional
information. For [object detection](./object_detection) one would draw bounding
boxes and specify target classes for each box.

## Cleaning

The gathered data is often dirty and needs to be cleaned. Then one does an
**Exploratory Data Analysis** (**EDA**) to see needs to be done.
