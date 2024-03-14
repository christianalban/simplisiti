<form action="{{ route($action, $params) }}" method="POST" {{ $attributes }}>
    @csrf
    @method($method)

    {{ $slot }}
</form>
