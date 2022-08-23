# UFOs

## Project Overview
A journalist is compiling some data from reported UFO sightings from all over the US and plans to write an article about it.  The purpose of this project is to use JavaScript to assist the journalist with providing an interactive table visualization of the UFO sightings data.  The table will have filter capabilities where the reader can enter any desired filter criteria and the table will dynamically update to display just the desired rows of data based on the filter(s).  This project utilizes JavaScript and HTML to develop a web app to display the journalist's article and the UFO sighting data visualization table.

## Resources
- Data Source: data.js
- Software: Chrome Web browser, VS Code
- Applications: GitBash, GitHub, JavaScript, HTML

## Results
The interactive table works great.  For example, to search for all UFO sightings that took place in California on January 1, 2010:
- 1: First, go to the UFOs GitHub repository and open the index.html file to navigate to the webpage.

![github click](https://github.com/mewers2/UFOs/blob/main/Resources/1_github.png)

- 2: Next scroll down to the table section of the webpage.

![table scroll](https://github.com/mewers2/UFOs/blob/main/Resources/2_table_screenshot.png)

- 3: Type 1/10/2010 in the Date filter text box

![type date](https://github.com/mewers2/UFOs/blob/main/Resources/3_date.png)

- 4: Type CA in the State filter text box

![type state](https://github.com/mewers2/UFOs/blob/main/Resources/4_state.png)

- 5: Hit Enter, the table will automatically display just the rows of data for UFO sightings that occurred on 1/1/2010 in California.

![hit enter](https://github.com/mewers2/UFOs/blob/main/Resources/5_enter.png)

## Summary
One drawback to the way these filters are set up, is that the Date filter can only take a single day as opposed to a date range. One recommendation would be to refactor the current web app Date filter to be able to take a date range in addition to just a singular day.  Or another way to do it would be to add a second input text box under the date filter section so that a start date and an end date get entered into the date filter in order to support the option of searching for UFO sightings which occurred over a specific window of time.  Another recommendation is to add a filter for the duration column.  Also, all but two UFO sightings occurred in the US, so maybe eliminate the country filter since there is not a whole lot of analysis options gained from filtering this particular dataset by country. Lastly, perhaps modifying the shape filter to provide a list of the options listed in the entire dataset with the option to check the box to see rows of data with that type of shape, may help the reader to have a better idea of the shape filter options as opposed to the input text box.
