Welcome To Ollyo Job Task Image Gallery


This project is built with React, and for design, I've utilized the Swal and Aos npm packages. I've also incorporated Tailwind CSS for styling.

Inside the project's "Component" folder, there are only three components:

1.Header
2.ImageGallery
3.MainBody



<!-- Live Link -->
https://euphonious-zuccutto-3c73bd.netlify.app/

<!-- Github Link -->
https://github.com/kaziFahmid/image-gallery-task
<!-- Component explanation -->

1.ImageGallery Component:

This component serves as the main container for your image gallery.
It includes the Header component and the MainBody component, making it the parent component that manages the overall structure of the gallery.
You pass an array of picture objects and other states to the Header and MainBody components, indicating that it handles data management for the entire gallery.


2.Header Component:


The Header component is responsible for displaying the top section of your image gallery.
It includes various UI elements and functionality.
* Left side checkbox: This checkbox likely allows users to select all images at once or deselect them.
Selected pictures count: It shows the number of images that the user has currently selected.
* "Delete files" text: This text likely serves as a button or trigger for deleting the selected images.
This component appears to handle user interactions related to selecting and deleting images.


3.MainBody Component:

The MainBody component is responsible for displaying the main grid layout of images in your gallery.
It implements a grid layout to display images in a visually appealing manner.
* Drag and drop functionality: You've added drag-and-drop functionality for each image container, enabling users to rearrange the order of images by dragging and dropping them.
* Aos animation package: You've used the Aos npm package to add animations to your image containers. These animations likely trigger when users hover over each image container, making the UI more interactive and visually appealing.
* Checkbox selection: This component allows users to select images by using checkboxes associated with each image. When a user hovers over an image, a checkbox appears, and users can select or deselect images using these checkboxes.