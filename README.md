# Pesquisa

```
ng new pesquisa --routing=true --style=scss --skip-tests
```
_html_
```
<form (ngSubmit)="pesquisa()" action="">
  <button type="submit">Pesquisar</button>
</form>
```
_app.module.ts_
```
import { FormsModule } from '@angular/forms';
FormsModule
```

```
ng add @angular/material --skip-confirmation

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

MatInputModule,
MatButtonModule,
```