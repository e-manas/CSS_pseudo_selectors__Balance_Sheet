span[class~="sr-only"] {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    -webkit-clip-path: inset(50%) !important;
    height: 1px !important;
    width: 1px !important;
    position: absolute !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
    margin: -1px !important;
}

html {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    color: #0a0a23;
}

h1 {
    max-width: 37.25rem;
    margin: 0 auto;
    padding: 1.5rem 1.25rem;
}

h1 .flex {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
}

h1 .flex span:first-of-type {
    font-size: 0.7em;
}

h1 .flex span:last-of-type {
    font-size: 1.2em;
}

section {
    max-width: 40rem;
    margin: 0 auto;
    border: 2px solid #d0d0d5;
}

#years {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: #0a0a23;
    color: #fff;
    z-index: 999;
    padding: 0.5rem calc(1.25rem + 2px) 0.5rem 0;
    margin: 0 -2px;
}

#years span[class] {
    font-weight: bold;
    width: 4.5rem;
    text-align: right;
}

.table-wrap {
    padding: 0 0.75rem 1.5rem 0.75rem;
}

table {
    border-collapse: collapse;
    border: 0;
    width: 100%;
    position: relative;
    margin-top: 3rem;
}

table caption {
    color: #356eaf;
    font-size: 1.3em;
    font-weight: normal;
    position: absolute;
    top: -2.25rem;
    left: 0.5rem;
}

tbody td {
    width: 100vw;
    min-width: 4rem;
    max-width: 4rem;
}

tbody th {
    width: calc(100% - 12rem);
}

tr[class="total"] {
    border-bottom: 4px double #0a0a23;
    font-weight: bold;
}

tr[class="total"] th {
    text-align: left;
    padding: 0.5rem 0 0.25rem 0.5rem;
}

tr.total td {
    text-align: right;
    padding: 0 0.25rem;
}

tr.total td:nth-of-type(3) {
    padding-right: 0.5rem;
}

tr.total:hover {
    background-color: #99c9ff;
}

td.current {
    font-style: italic;
}

tr.data {
    background-image: linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem);
}

tr.data th {
    text-align: left;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
}

tr.data th .description {
    display: block;
    font-weight: normal;
    font-style: italic;
    padding: 1rem 0 0.75rem;
    margin-right: -13.5rem;
}

tr.data td {
    vertical-align: top;
    padding: 0.3rem 0.25rem 0;
    text-align: right;
}

tr.data td:last-of-type {
    padding-right: 0.5rem;
}
