@foreach($app->getScriptManager()->getScripts() as $script)
    <script src="{{ asset(config('simplisiti.scripts_path') . '/' . $script->name . '.js') }}"></script>
@endforeach
