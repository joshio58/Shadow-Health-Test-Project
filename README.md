# Shadow Health Frontend Developer Assignment #2342-2954

##### Joshua Burke - 352-327-0196

<br />

<div class="md-abstract">
<div class="md-abstract-image">

<img src="https://res.cloudinary.com/joshio58/image/upload/v1594925716/Shadow_Health/mockup-2342-2954_r7uvpc.jpg" class="img-resp" alt="Mockup of a small widget" />

</div>

## Abstract

<div class="md-abstract-definition">

The above is a mockup of a small widget.

The widget is used to show the performance of the top 3 students or can be used to show the lowest 3.

This shows the breakdown of the overall score including:

-   SPI (Student Performance Index)
-   SDC (Subjective Data Collection)
-   ODC (Objective Data Collection)
-   E&E (Education and Empathy).

The objective of this widget is to give a quick overview of student performance to an instructor.

</div>

</div>

<br />

## Analysis of Mockup

<hr />

> Write 3 points that you may think is interesting about this mockup or the components within it.
>
> \*\* The points do not have to be negative points, but please elaborate on your points.

<hr />
<br />

#### Point 1:

> "The widget is used to show the performance of the top 3 students or can be used to show the lowest 3."

##### Issue:

-   The mock up does not list a way to switch between the top 3 or bottom 3 students state.

##### Recommendation:

-   Add a button to toggle state between top 3 or bottom 3 students.

<hr />
<br />

#### Point 2:

##### Issue:

-   There is no indication as to what value the colored background or "progress meter" of each student represents. By looking at the values and comparing with the values in each score breakdown it appears to represent SPI.

##### Recommendation:

-   Add a filter / selection option to apply the "progress meter" to either SPI, SDC, ODC, or E&E.

<hr />
<br />

#### Point 3:

##### Issue:

-   The colored background of each student has no visual reference as to what the colors are meant to describe. In the mockup the background of the first student is green and then each subsequent student's background spins toward yellow.

<img src="https://res.cloudinary.com/joshio58/image/upload/v1594931818/Shadow_Health/color-wheel_pvblgy.png" width=200 style="margin:0 auto 1em auto">

-   The color spin could indicate any of the following:
    _ The SPI - green meaning low (min value) to yellow or red meaning high (max value)
    _ Student Ranking - green meaning high (max value) to yellow or red meaning low (min value) \* The color spin may have no value representation and is just meant to visually separate each student.

_Side Note:_

-   The green background color for the first student is too dark and does not provide enough contrast to the overlaid text thus making the text more difficult to read and diminishes user experience.

##### Recommendation:

_Option 1:_

-   Provide a legend or key indicating the color range and / or the value the color represents.

_Option 2:_

-   If the color spin has no relation to a data value then remove the color spin and replace with a common color for each background.

<hr />
<br />

## Design Principles

> What are 1 or 2 design principles that you think is key when designing a widget like this?

<br />

**Principle 1:** Typography & Readability

-   This widget is meant to give a quick overview of multiple points data in an easy to digest method. Thus the text and font selection as well as weight and color will be crucial here as it's job is to provide the user the desired information as fast as possible.

<br />

**Principle 2:** Color Palette

-   Proper color selection is very important. Poorly chosen combinations of colors can lead to distraction and confusion requiring more work for the user to parse the information being displayed (especially when dealing with large amounts of data that are meant to be ingested and dissected quickly).
-   Properly chosen color palettes can assist the user in understanding data rapidly by utilizing "pre-understood" conditions like:
    _ Red = danger, stop, error
    _ Yellow = warning, problem \* Green = good, go, success

<hr />
<br />

## Accessibility

> What are 1 or 2 accessibility guidelines you would keep in mind when designing a widget like
> this?

<br />

**Accessibility Consideration 1:** Proper use of Color, Content, and Markup:

-   Color should not be used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. \* Example: A submit button should not just be a green element that is clickable ... it should also have proper markup indicating it is a button and relevant content in text form that clearly represents the action to be taken on the click event, like "Submit". This allows multiple assistive technologies to help convey information in a variety of ways and to the broadest audience.

    -   **Important:** Non-text Content:
        -   All non-text content that is presented to the user like an arrow in a previous or next button, has alt-text that clearly represents the action to be taken on the click event.

<br />

**Accessibility Consideration 2:** Predictability

-   Make the widget appear and operate in predictable ways. \* **Example:** Having a button to sort students by name should ... when clicked: 1. Reorder the data by the students name alphabetically and in a descending order (A-Z). 2. While students are sorted by name, a second click would reverse the order to be ascending (Z-A)
