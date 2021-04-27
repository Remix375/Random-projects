const timeTableOne = `<thead>
<tr>
    <th class="time"></th>
    <th class="first">Monday</th>
    <th class="first">Tuesday</th>
    <th class="first">Wednesday</th>
    <th class="first">Thursday</th>
    <th class="first">Friday</th>
    <th class="first">Saturday</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="time">8:00</td>
    <td></td>
    <td rowspan="2" class = "physics">Physics</td>
    <td rowspan="2" class="computerScience">Computer science</td>
    <td rowspan="2" id="sports">Sports</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">9:00</td>
    <td class="science">Science</td>
    <td rowspan="2" class="maths">Maths</td>
    <td></td>
</tr>
<tr>
    <td class="time">10:10</td>
    <td class="german">German</td>
    <td rowspan="2" class="maths">Maths</td>
    <td class="english">English</td>
    <td class = "french">French</td>
    <td></td>
</tr>
<tr>
    <td class="time">11:10</td>
    <td rowspan="2" class = "french">French</td>
    <td class="history">History/Geography</td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">12:10</td>
    <td></td>
    <td class = "french">French</td>
    <td></td>
    <td class="english">English</td>
    <td></td>
</tr>
<tr>
    <td class="time">13:10</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="english">English</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">14:10</td>
    <td></td>
    <td class="science">Science</td>
    <td></td>
    <td rowspan="2" class="computerScience">Computer science</td>
    <td class="german">German</td>
    <td></td>
</tr>
<tr>
    <td class="time">15:20</td>
    <td></td>
    <td rowspan="2" class="history">History/ Geography</td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">16:20</td>
    <td rowspan="2" class = "physics">Physics</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">17:20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">18:20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td class="time">19:20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>

</tbody>
`
const timeTableTwo = `
<thead>
    <tr>
        <th class="time"></th>
        <th class="first">Monday</th>
        <th class="first">Tuesday</th>
        <th class="first">Wednesday</th>
        <th class="first">Thursday</th>
        <th class="first">Friday</th>
        <th class="first">Saturday</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="time">8:00</td>
        <td></td>
        <td rowspan="2" class = "physics">Physics</td>
        <td rowspan="2" class="computerScience">Computer science</td>
        <td rowspan="2" id="sports">Sports</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">9:00</td>
        <td class="science">Science</td>
        <td rowspan="3" class="maths">Maths</td>
        <td></td>
    </tr>
    <tr>
        <td class="time">10:10</td>
        <td class="german">German</td>
        <td rowspan="2" class="maths">Maths</td>
        <td class="english">English</td>
        <td class = "french">French</td>
        <td></td>
    </tr>
    <tr>
        <td class="time">11:10</td>
        <td rowspan="2" class = "french">French</td>
        <td class="history">History/Geography</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">12:10</td>
        <td></td>
        <td class = "french">French</td>
        <td></td>
        <td class="english">English</td>
        <td></td>
    </tr>
    <tr>
        <td class="time">13:10</td>
        <td></td>
        <td></td>
        <td></td>
        <td class="EMC">EMC</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">14:10</td>
        <td rowspan="2" class="physics">Physics</td>
        <td class="science">Science</td>
        <td></td>
        <td rowspan="2" class="computerScience">Computer science</td>
        <td class="german">German</td>
        <td></td>
    </tr>
    <tr>
        <td class="time">15:20</td>
        <td rowspan="2" class="history">History/ Geography</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">16:20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">17:20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">18:20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="time">19:20</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    
</tbody>
`
const arrowToTwo = `<img src="ressources/arrow1.png" id = "second" title = "Weak b"></img>`
const arrowToOne = `<img src="ressources/arrow2.png" id = "first" title = "Weak a">`
